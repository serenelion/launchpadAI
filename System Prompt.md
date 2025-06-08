# Launchpad AI - System Prompt

## Project Overview

Launchpad AI is a regenerative AI platform built on Next.js that enables users to create and interact with custom AI agents guided by permaculture ethics. The platform combines the power of Vercel's AI chatbot template with custom GPT capabilities, threaded conversations, and persistent memory.

## Core Architecture

### Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Backend**: Next.js API Routes + Supabase
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI Integration**: OpenAI API + Vercel AI SDK
- **Styling**: Tailwind CSS + shadcn/ui
- **Development**: Cursor IDE + ChatGPT Codex

### Key Features

1. **Chat Interface**

   - Threaded conversations
   - Markdown support
   - Code highlighting
   - File attachments
   - Real-time streaming

2. **Custom GPT Creation**

   - Agent configuration
   - System prompt management
   - Memory persistence
   - Context management

3. **Authentication & Storage**
   - User authentication via Supabase
   - Conversation history
   - File storage
   - Agent configurations

## Development Workflow

### Local Development (Cursor)

1. Clone repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   ```
   OPENAI_API_KEY=your_key
   SUPABASE_URL=your_url
   SUPABASE_ANON_KEY=your_key
   ```
4. Run development server: `npm run dev`
5. Access at `http://localhost:3000`

### Cloud Development (ChatGPT Codex)

1. Connect to GitHub repository
2. Enable Codex integration
3. Use Codex for:
   - Code generation
   - Bug fixes
   - Documentation
   - Code review

### CI/CD Pipeline

1. **GitHub Actions**

   - Lint check
   - Type checking
   - Unit tests
   - E2E tests

2. **Vercel Deployment**
   - Automatic deployment on main branch
   - Preview deployments for PRs
   - Environment variable management

## Permaculture Ethics Integration

### Core Principles

1. **Earth Care**

   - Sustainable resource usage
   - Energy efficiency
   - Environmental impact awareness

2. **People Care**

   - User privacy
   - Accessibility
   - Ethical AI usage

3. **Fair Share**
   - Open source components
   - Community contribution
   - Knowledge sharing

## Agent Development Guidelines

### System Prompt Structure

1. **Context**

   - Agent purpose
   - Domain knowledge
   - Ethical framework

2. **Capabilities**

   - Available tools
   - Response format
   - Memory management

3. **Constraints**
   - Ethical boundaries
   - Resource limits
   - Response guidelines

### Memory Management

1. **Short-term**

   - Conversation context
   - Current task state
   - User preferences

2. **Long-term**
   - User history
   - Agent learning
   - System improvements

## Security & Privacy

### Data Protection

1. **User Data**

   - Encrypted storage
   - Access control
   - Data retention policies

2. **API Security**
   - Rate limiting
   - Input validation
   - Error handling

### Compliance

1. **GDPR**

   - Data portability
   - Right to be forgotten
   - Privacy by design

2. **AI Ethics**
   - Bias prevention
   - Transparency
   - User control

## Monitoring & Maintenance

### Performance Metrics

1. **Response Time**

   - API latency
   - Processing time
   - User experience

2. **Resource Usage**
   - API costs
   - Storage usage
   - Compute resources

### Health Checks

1. **System Status**

   - API availability
   - Database health
   - Cache performance

2. **Error Tracking**
   - Logging
   - Alerting
   - Incident response

## Documentation

### Code Documentation

1. **API Documentation**

   - Endpoint descriptions
   - Request/response formats
   - Authentication details

2. **Component Documentation**
   - Usage examples
   - Props interface
   - State management

### User Documentation

1. **Getting Started**

   - Installation
   - Configuration
   - Basic usage

2. **Advanced Features**
   - Custom agent creation
   - API integration
   - Best practices
