#!/usr/bin/env python3

import os
from PIL import Image, ImageDraw

# Notable brand colors
PRIMARY_COLOR = "#3B82F6"  # Blue
BACKGROUND_COLOR = "#25292e"  # Dark gray from current splash

def create_splash_screen():
    """Create a splash screen with the Notable logo"""
    width, height = 1242, 2436  # iPhone 11 Pro Max size
    
    # Create a new image with dark background
    img = Image.new('RGBA', (width, height), BACKGROUND_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Calculate logo size and position
    logo_size = width // 3
    logo_x = (width - logo_size) // 2
    logo_y = (height - logo_size) // 2
    
    # Draw rounded rectangle background for logo
    corner_radius = logo_size // 8
    draw.rounded_rectangle(
        [(logo_x, logo_y), (logo_x + logo_size, logo_y + logo_size)],
        radius=corner_radius,
        fill=(255, 255, 255, 255),
        outline=None
    )
    
    # Draw the 'N' logo
    padding = logo_size // 4
    line_width = max(logo_size // 12, 8)
    
    left_x = logo_x + padding
    right_x = logo_x + logo_size - padding
    top_y = logo_y + padding
    bottom_y = logo_y + logo_size - padding
    
    # Left vertical line
    draw.line(
        [(left_x, top_y), (left_x, bottom_y)],
        fill=PRIMARY_COLOR,
        width=line_width
    )
    
    # Diagonal line
    draw.line(
        [(left_x, bottom_y), (right_x, top_y)],
        fill=PRIMARY_COLOR,
        width=line_width
    )
    
    # Right vertical line
    draw.line(
        [(right_x, top_y), (right_x, bottom_y)],
        fill=PRIMARY_COLOR,
        width=line_width
    )
    
    # Save the splash screen
    output_path = os.path.join("packages", "mobile", "assets", "splash.png")
    img.save(output_path, 'PNG')
    print(f"Generated splash screen: {output_path}")

if __name__ == "__main__":
    create_splash_screen()