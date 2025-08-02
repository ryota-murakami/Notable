#!/bin/bash
set -e

# Script to manage test database for E2E tests

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
COMPOSE_FILE="$PROJECT_DIR/docker-compose.test.yml"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo -e "${RED}Error: Docker is not running${NC}"
        exit 1
    fi
}

# Function to wait for PostgreSQL to be ready
wait_for_postgres() {
    echo -e "${YELLOW}Waiting for PostgreSQL to be ready...${NC}"
    local max_attempts=30
    local attempt=0
    
    while [ $attempt -lt $max_attempts ]; do
        if docker compose -f "$COMPOSE_FILE" exec -T test-db pg_isready -U postgres > /dev/null 2>&1; then
            echo -e "${GREEN}PostgreSQL is ready!${NC}"
            return 0
        fi
        
        attempt=$((attempt + 1))
        echo -n "."
        sleep 1
    done
    
    echo -e "${RED}PostgreSQL failed to start${NC}"
    return 1
}

# Main command handler
case "$1" in
    start)
        echo -e "${GREEN}Starting test database...${NC}"
        check_docker
        
        # Stop any existing containers
        docker compose -f "$COMPOSE_FILE" down > /dev/null 2>&1 || true
        
        # Start the database
        docker compose -f "$COMPOSE_FILE" up -d
        
        # Wait for database to be ready
        wait_for_postgres
        
        echo -e "${GREEN}Test database is ready!${NC}"
        echo "PostgreSQL: postgresql://postgres:testpassword@localhost:5433/notable_test"
        echo "Redis: redis://localhost:6380"
        ;;
        
    stop)
        echo -e "${YELLOW}Stopping test database...${NC}"
        docker compose -f "$COMPOSE_FILE" down
        echo -e "${GREEN}Test database stopped${NC}"
        ;;
        
    restart)
        "$0" stop
        sleep 2
        "$0" start
        ;;
        
    status)
        echo -e "${YELLOW}Test database status:${NC}"
        docker compose -f "$COMPOSE_FILE" ps
        ;;
        
    logs)
        docker compose -f "$COMPOSE_FILE" logs -f
        ;;
        
    reset)
        echo -e "${YELLOW}Resetting test database...${NC}"
        docker compose -f "$COMPOSE_FILE" down -v
        "$0" start
        ;;
        
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|reset}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the test database"
        echo "  stop    - Stop the test database"
        echo "  restart - Restart the test database"
        echo "  status  - Show test database status"
        echo "  logs    - Show test database logs"
        echo "  reset   - Reset test database (removes all data)"
        exit 1
        ;;
esac