import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { message, messages } = await req.json()

    // Generate contextual response based on user input
    const response = generateEnterpriseResponse(message)

    return NextResponse.json({ response })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}

function generateEnterpriseResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()
  
  // Change Management responses
  if (lowerMessage.includes('change') && (lowerMessage.includes('management') || lowerMessage.includes('transform'))) {
    return `🎯 **Change Management Strategy**

For successful organizational transformation, I recommend this structured approach:

**1. Change Readiness Assessment**
- Evaluate organizational maturity and capacity for change
- Identify key stakeholders and their influence levels
- Assess current culture and resistance points

**2. Strategic Communication Plan**
- Develop clear, consistent messaging about the "why" behind change
- Create multi-channel communication strategy
- Establish feedback loops and two-way dialogue

**3. Stakeholder Engagement Framework**
- Map stakeholder impact and influence
- Design targeted engagement strategies for each group
- Build change champion networks

**4. Capability Building Program**
- Identify skill gaps and training needs
- Create learning pathways and support resources
- Implement just-in-time training delivery

**5. Success Metrics & Monitoring**
- Define leading and lagging indicators
- Establish regular pulse surveys
- Create adjustment mechanisms for course correction

What specific aspect of your transformation would you like to dive deeper into?`
  }
  
  // Business Case responses
  if (lowerMessage.includes('business case') || lowerMessage.includes('roi')) {
    return `📊 **Business Case Development Framework**

Here's a comprehensive structure for building compelling business cases:

**Executive Summary**
- Problem statement and urgency
- Proposed solution overview
- Key financial metrics (ROI, NPV, Payback)
- Implementation timeline and risks

**Current State Analysis**
- Quantify pain points and inefficiencies
- Cost of inaction scenarios
- Competitive disadvantage implications
- Stakeholder impact assessment

**Solution Design**
- Detailed proposal with alternatives considered
- Implementation approach and methodology
- Resource requirements and timeline
- Technology and process changes

**Financial Analysis**
- 3-5 year financial projections
- Sensitivity analysis with best/worst case scenarios
- Break-even analysis and payback period
- Total Cost of Ownership (TCO) calculations

**Risk Management**
- Risk register with probability and impact
- Mitigation strategies and contingency plans
- Change management and adoption risks
- Technical and operational dependencies

**Implementation Roadmap**
- Phase-gate approach with milestones
- Quick wins and early value delivery
- Success criteria and measurement plan
- Governance and decision-making structure

What specific business challenge are you building a case for?`
  }
  
  // Design Thinking responses
  if (lowerMessage.includes('design thinking') || lowerMessage.includes('creative') || lowerMessage.includes('innovation')) {
    return `🎨 **Design Thinking Facilitation**

Let me guide you through the five-stage design thinking process:

**1. EMPATHIZE - Understand Your Users**
- Conduct user interviews and observations
- Create empathy maps to understand needs, pains, and gains
- Gather insights from diverse stakeholder perspectives
- Document user personas and journey maps

**2. DEFINE - Frame the Problem**
- Synthesize research into key insights
- Create "How might we..." problem statements
- Prioritize problems based on impact and feasibility
- Align stakeholders on the core challenge

**3. IDEATE - Generate Solutions**
- Brainstorm without judgment using techniques like:
  - Brainstorming sessions
  - SCAMPER method
  - Six thinking hats
  - Mind mapping
- Build on others' ideas
- Go for quantity over quality initially

**4. PROTOTYPE - Build to Think**
- Create low-fidelity prototypes quickly
- Test concepts with minimal investment
- Paper prototypes, wireframes, or mock-ups
- Focus on learning, not perfection

**5. TEST - Learn and Iterate**
- Test prototypes with real users
- Gather feedback and observe behavior
- Iterate based on learnings
- Scale successful concepts

What specific challenge would you like to apply design thinking to?`
  }
  
  // VUCA Environment responses
  if (lowerMessage.includes('vuca') || lowerMessage.includes('volatile') || lowerMessage.includes('uncertain') || lowerMessage.includes('complex')) {
    return `⚡ **VUCA Environment Navigation**

In today's volatile, uncertain, complex, and ambiguous business landscape, here's your strategic framework:

**VOLATILITY → VISION**
- Develop clear, compelling vision that provides stability
- Create scenario planning for multiple futures
- Build rapid response capabilities
- Establish early warning systems

**UNCERTAINTY → UNDERSTANDING**
- Invest in market intelligence and trend analysis
- Build learning loops and feedback mechanisms
- Develop hypothesis-driven approaches
- Create experiments to test assumptions

**COMPLEXITY → CLARITY**
- Break complex challenges into manageable components
- Use systems thinking to understand interdependencies
- Create simple rules for complex decisions
- Establish clear communication protocols

**AMBIGUITY → AGILITY**
- Build adaptive capacity and flexible structures
- Develop multiple options and contingency plans
- Foster experimentation and learning culture
- Create rapid decision-making processes

The key insight: In VUCA environments, the ability to learn faster than competitors becomes your only sustainable advantage.

What specific VUCA challenge is your organization facing?`
  }
  
  // General responses
  const responses = [
    `Thank you for your question. As the Enterprise AI Catalyst, I'm here to help you navigate complex business challenges.

🎯 **Change Management** - If you're dealing with organizational transformation, I can help you develop a comprehensive change strategy.

📊 **Business Case Development** - If you need to build a compelling business case, I can guide you through financial analysis and ROI modeling.

🎨 **Design Thinking** - If you're tackling complex problems that need creative solutions, I can facilitate a human-centered design process.

⚡ **VUCA Navigation** - If you're operating in volatile, uncertain environments, I can help you build adaptive strategies.

Could you tell me more about your specific challenge?`,

    `I'd be happy to help you with that challenge. As your Enterprise AI Catalyst, let me provide some strategic guidance:

**Key Principles for Success:**
1. **Start with Why** - Ensure clear understanding of the underlying business need
2. **Data-Driven Decisions** - Use metrics and evidence to guide choices
3. **Stakeholder-Centric** - Consider all affected parties and their perspectives
4. **Iterative Approach** - Plan, execute, measure, adjust, repeat
5. **Risk Management** - Identify, assess, and mitigate potential issues

What additional details can you share about your situation?`
  ]
  
  return responses[Math.floor(Math.random() * responses.length)]
}