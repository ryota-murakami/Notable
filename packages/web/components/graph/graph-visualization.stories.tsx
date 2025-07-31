import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { GraphVisualization } from './graph-visualization'
import type { GraphData } from './graph-visualization'
import { expect, userEvent, waitFor, within } from '@storybook/test'

// Helper function to add source/target to edges for D3 compatibility
function transformEdges(edges: any[]): any[] {
  return edges.map((edge) => ({
    ...edge,
    source: edge.from,
    target: edge.to,
  }))
}

const meta = {
  title: 'UI/Visualization/GraphVisualization',
  component: GraphVisualization,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Graph data containing nodes and edges',
    },
    onNodeClick: {
      action: 'onNodeClick',
      description: 'Callback when a node is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <div className='h-screen p-4 bg-background'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GraphVisualization>

export default meta
type Story = StoryObj<typeof meta>

// Generate sample data
const generateSampleData = (
  nodeCount = 20,
  edgeCount = 30,
  isolated = 2
): GraphData => {
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const connections = i < isolated ? 0 : Math.floor(Math.random() * 10) + 1
    const createdDate = new Date(
      Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000
    )
    const updatedDate = new Date(
      createdDate.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000
    )

    return {
      id: `node-${i}`,
      label: `Note ${i + 1}`,
      title: `Note Title ${i + 1}`,
      created_at: createdDate.toISOString(),
      updated_at: updatedDate.toISOString(),
      connections,
      tags:
        i % 3 === 0
          ? ['work', 'project']
          : i % 3 === 1
            ? ['personal']
            : ['research'],
      centrality: connections / 10,
      clusterId: Math.floor(i / 5),
    }
  })

  // Create edges
  const edges: any[] = []
  for (let i = 0; i < edgeCount; i++) {
    const fromIdx =
      Math.floor(Math.random() * (nodeCount - isolated)) + isolated
    const toIdx = Math.floor(Math.random() * (nodeCount - isolated)) + isolated
    if (fromIdx !== toIdx) {
      edges.push({
        from: `node-${fromIdx}`,
        to: `node-${toIdx}`,
        label: `Link ${i + 1}`,
        title: `Connection between Note ${fromIdx + 1} and Note ${toIdx + 1}`,
      })
    }
  }

  // Calculate actual connections
  nodes.forEach((node) => {
    node.connections = edges.filter(
      (edge) => edge.from === node.id || edge.to === node.id
    ).length
  })

  const totalConnections = nodes.reduce(
    (sum, node) => sum + node.connections,
    0
  )
  const avgConnections = totalConnections / nodes.length

  return {
    nodes,
    edges: transformEdges(edges),
    stats: {
      totalNotes: nodes.length,
      totalLinks: edges.length,
      avgConnections: parseFloat(avgConnections.toFixed(2)),
    },
  }
}

// Sample datasets
const smallGraph = generateSampleData(10, 12, 1)
const mediumGraph = generateSampleData(30, 50, 3)
const largeGraph = generateSampleData(100, 200, 10)

// Knowledge base example
const knowledgeBaseData: GraphData = {
  nodes: [
    // Central hub nodes
    {
      id: 'ai',
      label: 'Artificial Intelligence',
      title: 'AI Overview',
      created_at: new Date('2024-01-01').toISOString(),
      updated_at: new Date('2024-03-01').toISOString(),
      connections: 8,
      tags: ['technology', 'ai'],
      centrality: 0.9,
    },
    {
      id: 'ml',
      label: 'Machine Learning',
      title: 'ML Fundamentals',
      created_at: new Date('2024-01-05').toISOString(),
      updated_at: new Date('2024-02-20').toISOString(),
      connections: 6,
      tags: ['technology', 'ml'],
      centrality: 0.8,
    },
    // Sub-topics
    {
      id: 'dl',
      label: 'Deep Learning',
      title: 'Deep Learning Concepts',
      created_at: new Date('2024-01-10').toISOString(),
      updated_at: new Date('2024-02-15').toISOString(),
      connections: 4,
      tags: ['technology', 'dl'],
      centrality: 0.6,
    },
    {
      id: 'nlp',
      label: 'Natural Language Processing',
      title: 'NLP Techniques',
      created_at: new Date('2024-01-15').toISOString(),
      updated_at: new Date('2024-02-10').toISOString(),
      connections: 3,
      tags: ['technology', 'nlp'],
      centrality: 0.5,
    },
    {
      id: 'cv',
      label: 'Computer Vision',
      title: 'CV Applications',
      created_at: new Date('2024-01-20').toISOString(),
      updated_at: new Date('2024-02-05').toISOString(),
      connections: 3,
      tags: ['technology', 'cv'],
      centrality: 0.5,
    },
    // Specific topics
    {
      id: 'transformers',
      label: 'Transformers',
      title: 'Transformer Architecture',
      created_at: new Date('2024-02-01').toISOString(),
      updated_at: new Date('2024-03-10').toISOString(),
      connections: 2,
      tags: ['architecture'],
      centrality: 0.4,
    },
    {
      id: 'cnn',
      label: 'CNNs',
      title: 'Convolutional Neural Networks',
      created_at: new Date('2024-02-05').toISOString(),
      updated_at: new Date('2024-03-05').toISOString(),
      connections: 2,
      tags: ['architecture'],
      centrality: 0.4,
    },
    {
      id: 'ethics',
      label: 'AI Ethics',
      title: 'Ethical Considerations',
      created_at: new Date('2024-02-10').toISOString(),
      updated_at: new Date('2024-03-01').toISOString(),
      connections: 2,
      tags: ['ethics', 'philosophy'],
      centrality: 0.3,
    },
    // Isolated nodes
    {
      id: 'quantum',
      label: 'Quantum Computing',
      title: 'Quantum ML',
      created_at: new Date('2024-03-01').toISOString(),
      updated_at: new Date('2024-03-15').toISOString(),
      connections: 0,
      tags: ['quantum'],
      centrality: 0,
    },
    {
      id: 'robotics',
      label: 'Robotics',
      title: 'AI in Robotics',
      created_at: new Date('2024-03-05').toISOString(),
      updated_at: new Date('2024-03-10').toISOString(),
      connections: 0,
      tags: ['robotics'],
      centrality: 0,
    },
  ],
  edges: transformEdges([
    // AI connections
    {
      from: 'ai',
      to: 'ml',
      label: 'is implemented through',
      title: 'AI-ML Connection',
    },
    { from: 'ai', to: 'dl', label: 'includes', title: 'AI-DL Connection' },
    { from: 'ai', to: 'nlp', label: 'applied in', title: 'AI-NLP Connection' },
    { from: 'ai', to: 'cv', label: 'applied in', title: 'AI-CV Connection' },
    {
      from: 'ai',
      to: 'ethics',
      label: 'considers',
      title: 'AI-Ethics Connection',
    },
    // ML connections
    { from: 'ml', to: 'dl', label: 'subset', title: 'ML-DL Connection' },
    { from: 'ml', to: 'nlp', label: 'enables', title: 'ML-NLP Connection' },
    { from: 'ml', to: 'cv', label: 'enables', title: 'ML-CV Connection' },
    // DL connections
    {
      from: 'dl',
      to: 'transformers',
      label: 'uses',
      title: 'DL-Transformers Connection',
    },
    { from: 'dl', to: 'cnn', label: 'uses', title: 'DL-CNN Connection' },
    // NLP connections
    {
      from: 'nlp',
      to: 'transformers',
      label: 'revolutionized by',
      title: 'NLP-Transformers Connection',
    },
    // CV connections
    {
      from: 'cv',
      to: 'cnn',
      label: 'primarily uses',
      title: 'CV-CNN Connection',
    },
    // Ethics connections
    {
      from: 'ethics',
      to: 'ml',
      label: 'guides',
      title: 'Ethics-ML Connection',
    },
  ]),
  stats: {
    totalNotes: 10,
    totalLinks: 13,
    avgConnections: 2.6,
  },
}

// Project planning example
const projectPlanningData: GraphData = {
  nodes: [
    {
      id: 'project',
      label: 'Project Alpha',
      title: 'Main Project Overview',
      created_at: new Date('2024-01-01').toISOString(),
      updated_at: new Date('2024-03-20').toISOString(),
      connections: 6,
      tags: ['project', 'main'],
      centrality: 1.0,
    },
    {
      id: 'requirements',
      label: 'Requirements',
      title: 'Project Requirements',
      created_at: new Date('2024-01-02').toISOString(),
      updated_at: new Date('2024-01-15').toISOString(),
      connections: 3,
      tags: ['planning'],
      centrality: 0.7,
    },
    {
      id: 'design',
      label: 'Design Specs',
      title: 'Design Specifications',
      created_at: new Date('2024-01-10').toISOString(),
      updated_at: new Date('2024-02-01').toISOString(),
      connections: 4,
      tags: ['design'],
      centrality: 0.8,
    },
    {
      id: 'frontend',
      label: 'Frontend Tasks',
      title: 'Frontend Development',
      created_at: new Date('2024-01-20').toISOString(),
      updated_at: new Date('2024-03-01').toISOString(),
      connections: 3,
      tags: ['development', 'frontend'],
      centrality: 0.6,
    },
    {
      id: 'backend',
      label: 'Backend Tasks',
      title: 'Backend Development',
      created_at: new Date('2024-01-20').toISOString(),
      updated_at: new Date('2024-03-05').toISOString(),
      connections: 3,
      tags: ['development', 'backend'],
      centrality: 0.6,
    },
    {
      id: 'testing',
      label: 'Testing Plan',
      title: 'QA and Testing',
      created_at: new Date('2024-02-15').toISOString(),
      updated_at: new Date('2024-03-10').toISOString(),
      connections: 3,
      tags: ['qa', 'testing'],
      centrality: 0.5,
    },
    {
      id: 'deployment',
      label: 'Deployment',
      title: 'Deployment Strategy',
      created_at: new Date('2024-03-01').toISOString(),
      updated_at: new Date('2024-03-15').toISOString(),
      connections: 2,
      tags: ['deployment'],
      centrality: 0.4,
    },
    {
      id: 'meeting1',
      label: 'Kickoff Meeting',
      title: 'Project Kickoff',
      created_at: new Date('2024-01-01').toISOString(),
      updated_at: new Date('2024-01-01').toISOString(),
      connections: 1,
      tags: ['meeting'],
      centrality: 0.2,
    },
    {
      id: 'api-docs',
      label: 'API Documentation',
      title: 'API Docs',
      created_at: new Date('2024-02-10').toISOString(),
      updated_at: new Date('2024-03-01').toISOString(),
      connections: 2,
      tags: ['docs'],
      centrality: 0.3,
    },
  ],
  edges: transformEdges([
    {
      from: 'project',
      to: 'requirements',
      label: 'defines',
      title: 'Project Requirements',
    },
    { from: 'project', to: 'design', label: 'guides', title: 'Project Design' },
    {
      from: 'project',
      to: 'meeting1',
      label: 'started with',
      title: 'Kickoff',
    },
    {
      from: 'requirements',
      to: 'design',
      label: 'informs',
      title: 'Requirements to Design',
    },
    {
      from: 'requirements',
      to: 'testing',
      label: 'validates',
      title: 'Requirements Testing',
    },
    {
      from: 'design',
      to: 'frontend',
      label: 'implemented by',
      title: 'Design to Frontend',
    },
    {
      from: 'design',
      to: 'backend',
      label: 'implemented by',
      title: 'Design to Backend',
    },
    {
      from: 'frontend',
      to: 'testing',
      label: 'verified by',
      title: 'Frontend Testing',
    },
    {
      from: 'backend',
      to: 'testing',
      label: 'verified by',
      title: 'Backend Testing',
    },
    {
      from: 'backend',
      to: 'api-docs',
      label: 'documented in',
      title: 'API Documentation',
    },
    {
      from: 'frontend',
      to: 'deployment',
      label: 'deployed via',
      title: 'Frontend Deploy',
    },
    {
      from: 'backend',
      to: 'deployment',
      label: 'deployed via',
      title: 'Backend Deploy',
    },
    { from: 'api-docs', to: 'frontend', label: 'used by', title: 'API Usage' },
  ]),
  stats: {
    totalNotes: 9,
    totalLinks: 13,
    avgConnections: 2.9,
  },
}

export const Default: Story = {
  args: {
    data: mediumGraph,
  },
}

export const SmallGraph: Story = {
  args: {
    data: smallGraph,
  },
}

export const LargeGraph: Story = {
  args: {
    data: largeGraph,
  },
}

export const KnowledgeBase: Story = {
  args: {
    data: knowledgeBaseData,
  },
}

export const ProjectPlanning: Story = {
  args: {
    data: projectPlanningData,
  },
}

export const EmptyGraph: Story = {
  args: {
    data: {
      nodes: [],
      edges: [],
      stats: {
        totalNotes: 0,
        totalLinks: 0,
        avgConnections: 0,
      },
    },
  },
}

export const SingleNode: Story = {
  args: {
    data: {
      nodes: [
        {
          id: 'single',
          label: 'Lonely Note',
          title: 'A Single Note',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          connections: 0,
          tags: ['isolated'],
          centrality: 0,
        },
      ],
      edges: [],
      stats: {
        totalNotes: 1,
        totalLinks: 0,
        avgConnections: 0,
      },
    },
  },
}

// Interactive stories
export const SearchInteraction: Story = {
  args: {
    data: knowledgeBaseData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for graph to render
    await waitFor(() => {
      expect(canvas.getByPlaceholderText('Search notes...')).toBeInTheDocument()
    })

    // Search for "Machine"
    const searchInput = canvas.getByPlaceholderText('Search notes...')
    await userEvent.type(searchInput, 'Machine')

    // Should filter nodes (visual verification needed)
    await expect(searchInput).toHaveValue('Machine')

    // Clear search
    await userEvent.clear(searchInput)
    await userEvent.type(searchInput, 'Ethics')

    // Should show Ethics node
    await expect(searchInput).toHaveValue('Ethics')
  },
}

export const LayoutSwitching: Story = {
  args: {
    data: knowledgeBaseData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for graph
    await waitFor(() => {
      expect(canvas.getByDisplayValue('force')).toBeInTheDocument()
    })

    // Switch to circular layout
    const layoutSelect = canvas.getByDisplayValue('force')
    await userEvent.selectOptions(layoutSelect, 'circular')
    await expect(layoutSelect).toHaveValue('circular')

    // Switch to hierarchical
    await userEvent.selectOptions(layoutSelect, 'hierarchical')
    await expect(layoutSelect).toHaveValue('hierarchical')

    // Switch to radial
    await userEvent.selectOptions(layoutSelect, 'radial')
    await expect(layoutSelect).toHaveValue('radial')
  },
}

export const ColoringOptions: Story = {
  args: {
    data: knowledgeBaseData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for graph
    await waitFor(() => {
      expect(canvas.getByDisplayValue('connections')).toBeInTheDocument()
    })

    // Switch coloring modes
    const colorSelect = canvas.getByDisplayValue('connections')

    await userEvent.selectOptions(colorSelect, 'date')
    await expect(colorSelect).toHaveValue('date')

    await userEvent.selectOptions(colorSelect, 'cluster')
    await expect(colorSelect).toHaveValue('cluster')
  },
}

export const FilterInteraction: Story = {
  args: {
    data: largeGraph,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for graph
    await waitFor(() => {
      expect(canvas.getByText('Date:')).toBeInTheDocument()
    })

    // Change date filter
    const dateSelect = canvas.getByDisplayValue('all')
    await userEvent.selectOptions(dateSelect, '30days')

    // Adjust minimum connections
    const minConnectionsSlider = canvas.getByRole('slider')
    await userEvent.click(minConnectionsSlider)

    // Toggle hub visibility
    const showHubsCheckbox = canvas.getByLabelText('Show Hubs')
    await userEvent.click(showHubsCheckbox)
    await expect(showHubsCheckbox).not.toBeChecked()

    // Toggle isolated nodes
    const showIsolatedCheckbox = canvas.getByLabelText('Show Isolated')
    await userEvent.click(showIsolatedCheckbox)
    await expect(showIsolatedCheckbox).not.toBeChecked()
  },
}

export const AnalyticsPanel: Story = {
  args: {
    data: largeGraph,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Toggle analytics
    const analyticsButton = canvas.getByRole('button', { name: /Analytics/ })
    await userEvent.click(analyticsButton)

    // Should show analytics panel
    await waitFor(() => {
      expect(canvas.getByText('Hub Notes')).toBeInTheDocument()
      expect(canvas.getByText('Isolated Notes')).toBeInTheDocument()
      expect(canvas.getByText('Avg Connections')).toBeInTheDocument()
      expect(canvas.getByText('Total Links')).toBeInTheDocument()
    })

    // Toggle off
    await userEvent.click(analyticsButton)
  },
}

export const ZoomControls: Story = {
  args: {
    data: mediumGraph,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find zoom controls
    const zoomInButton = canvas.getByRole('button', { name: /zoom in/i })
    const zoomOutButton = canvas.getByRole('button', { name: /zoom out/i })
    const resetButton = canvas.getByRole('button', { name: /rotate/i })

    // Test zoom in
    await userEvent.click(zoomInButton)
    await waitFor(() => {
      expect(canvas.getByText(/150%/)).toBeInTheDocument()
    })

    // Test zoom out
    await userEvent.click(zoomOutButton)
    await waitFor(() => {
      expect(canvas.getByText(/100%/)).toBeInTheDocument()
    })

    // Test reset
    await userEvent.click(resetButton)
  },
}

export const NodeInteraction: Story = {
  args: {
    data: knowledgeBaseData,
    onNodeClick: (nodeId: string) => console.info(`Clicked node: ${nodeId}`),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for SVG to render
    await waitFor(() => {
      const svg = canvas.getByRole('img', { hidden: true })
      expect(svg).toBeInTheDocument()
    })

    // Note: Actual node clicking would require more complex SVG interaction
    // This test verifies the graph renders and is ready for interaction
  },
}

export const RealTimeData: Story = {
  args: {
    data: generateSampleData(20, 30, 2),
  },
  render: () => {
    const [data, setData] = React.useState(generateSampleData(20, 30, 2))

    React.useEffect(() => {
      const interval = setInterval(() => {
        setData((prevData) => {
          // Add a new node occasionally
          if (Math.random() > 0.7 && prevData.nodes.length < 30) {
            const newNode = {
              id: `node-${Date.now()}`,
              label: `New Note ${prevData.nodes.length + 1}`,
              title: `Dynamically Added Note`,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              connections: 0,
              tags: ['dynamic'],
              centrality: 0,
            }

            // Add a connection to existing node
            const randomNode =
              prevData.nodes[Math.floor(Math.random() * prevData.nodes.length)]
            const newEdge = {
              from: newNode.id,
              to: randomNode.id,
              label: 'New Connection',
              title: 'Dynamic Connection',
            }

            return {
              nodes: [...prevData.nodes, newNode],
              edges: [
                ...prevData.edges,
                { ...newEdge, source: newEdge.from, target: newEdge.to },
              ],
              stats: {
                totalNotes: prevData.nodes.length + 1,
                totalLinks: prevData.edges.length + 1,
                avgConnections:
                  (prevData.stats.avgConnections * prevData.nodes.length + 2) /
                  (prevData.nodes.length + 1),
              },
            }
          }
          return prevData
        })
      }, 3000)

      return () => clearInterval(interval)
    }, [])

    return <GraphVisualization data={data} />
  },
}

export const DenseNetwork: Story = {
  args: {
    data: (() => {
      const nodeCount = 50
      const nodes = Array.from({ length: nodeCount }, (_, i) => ({
        id: `node-${i}`,
        label: `N${i}`,
        title: `Node ${i}`,
        created_at: new Date(
          Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
        ).toISOString(),
        updated_at: new Date().toISOString(),
        connections: 0,
        tags: [`group-${i % 5}`],
        centrality: 0,
      }))

      // Create a highly connected network
      const edges: any[] = []
      for (let i = 0; i < nodeCount; i++) {
        // Connect to 3-8 random nodes
        const connectionCount = Math.floor(Math.random() * 6) + 3
        for (let j = 0; j < connectionCount; j++) {
          const target = Math.floor(Math.random() * nodeCount)
          if (target !== i) {
            edges.push({
              from: `node-${i}`,
              to: `node-${target}`,
              label: `E${edges.length}`,
              title: `Edge ${edges.length}`,
            })
          }
        }
      }

      // Update connection counts
      nodes.forEach((node) => {
        node.connections = edges.filter(
          (edge) => edge.from === node.id || edge.to === node.id
        ).length
      })

      return {
        nodes,
        edges: transformEdges(edges),
        stats: {
          totalNotes: nodes.length,
          totalLinks: edges.length,
          avgConnections: (edges.length * 2) / nodes.length,
        },
      }
    })(),
  },
}

export const MobileResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    data: smallGraph,
  },
}

export const TabletResponsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  args: {
    data: mediumGraph,
  },
}
