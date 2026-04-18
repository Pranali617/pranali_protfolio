/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  User, 
  Briefcase, 
  ChevronRight,
  MessageCircle,
  X,
  Send,
  Loader2
} from 'lucide-react';
import { bioData } from './data/bio';
import { Groq } from 'groq-sdk';

// Initialize Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-indigo-600 selection:text-white">
      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-brand">{bioData.name}.</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#projects" className="hover:text-brand transition-colors">Projects</a>
            <a href="#experience" className="hover:text-brand transition-colors">Career</a>
            <a href="#skills" className="hover:text-brand transition-colors">Tools</a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`https://github.com/${bioData.contact.github}`} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-600 hover:text-brand transition-colors" />
            </a>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-brand rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="relative px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                <BrainCircuit className="w-4 h-4" /> Ask AI
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 group cursor-pointer" onClick={() => setIsChatOpen(true)}>
                <div className="w-2 h-2 rounded-full bg-brand animate-ping"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand">AI Assistant is Online</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-4">
                {bioData.name}
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 tracking-tight text-gradient">
                {bioData.subtitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
                {bioData.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-black/10"
                >
                  View Projects
                </a>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="px-8 py-4 bg-white border-2 border-brand text-brand rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand hover:text-white transition-all shadow-lg shadow-indigo-100"
                >
                  Interview my AI
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About / Stats */}
        <section id="about" className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">Crafting intelligent experiences through code.</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    I specialize in bridging the gap between complex software systems and intuitive user interfaces. My recent focus has been on integrating Large Language Models (LLMs) to create proactive and helpful applications.
                  </p>
                  <p>
                    Whether it's building a RAG-based search engine or an interactive portfolio, my goal is always to deliver value through high-quality, maintainable code and performance-driven design.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-gray-100 rounded-3xl">
                  <div className="text-4xl font-bold mb-2">3+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Years Experience</div>
                </div>
                <div className="p-8 bg-white border border-gray-100 rounded-3xl">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Projects Built</div>
                </div>
                <div className="p-8 bg-white border border-gray-100 rounded-3xl col-span-2">
                  <div className="flex gap-4 items-center">
                    <BrainCircuit className="w-8 h-8 text-black" />
                    <div>
                      <div className="text-lg font-bold">AI Native</div>
                      <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Focus Area</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 block mb-4">Selected Work</span>
                <h2 className="text-5xl font-bold tracking-tight">Featured Projects</h2>
              </div>
              <div className="hidden md:block">
                <a href={bioData.contact.github} className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group">
                  More on Github <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="grid gap-24">
              {bioData.projects.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold tracking-tight mb-16">Professional Pathway</h2>
            <div className="space-y-12">
              {bioData.experience.map((exp, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
                  <div className="w-full md:w-1/3">
                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{exp.period}</div>
                    <div className="text-xl font-bold">{exp.company}</div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="text-2xl font-bold mb-4">{exp.role}</div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-4xl font-bold tracking-tight mb-16 mt-32">Academic Foundation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {bioData.education.map((edu, idx) => (
                <div key={idx} className="p-8 bg-gray-50 rounded-3xl">
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{edu.period}</div>
                  <div className="text-2xl font-bold mb-1">{edu.degree}</div>
                  <div className="text-gray-500 font-medium">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {bioData.skills.map((skill, idx) => (
                <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
              <div className="text-left">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">Let's build <br/><span className="text-gradient">the future.</span></h2>
                <p className="text-xl text-gray-500 max-w-md mb-12">
                  I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-6">
                  <a href={`mailto:${bioData.contact.email}`} className="group flex items-center gap-4 text-xl font-bold hover:text-brand transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    {bioData.contact.email}
                  </a>
                  <div className="flex gap-4">
                    <a href={`https://github.com/${bioData.contact.github}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand hover:bg-brand hover:text-white transition-all">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
            
            <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-xl font-bold tracking-tight text-brand">{bioData.name}.</div>
              <div className="text-xs uppercase tracking-[0.4em] font-bold text-gray-400">
                © 2026 {bioData.name}. Powered by Groq API
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating AI Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-brand text-white rounded-full shadow-2xl shadow-indigo-200 flex items-center justify-center group"
      >
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 group-hover:block transition-all"></div>
        <BrainCircuit className="w-8 h-8 relative z-10" />
      </motion.button>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <ChatBot onClose={() => setIsChatOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

interface ProjectCardProps {
  project: typeof bioData.projects[number];
  index: number;
  key?: number | string;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ delay: index * 0.1 }}
      className="grid md:grid-cols-2 gap-12 items-center p-8 rounded-[3rem] transition-all hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(99,102,241,0.15)] group"
    >
      <div className={`aspect-video rounded-3xl bg-gray-100 overflow-hidden relative ${index % 2 === 1 ? 'md:order-last' : ''}`}>
        <img 
          src={`https://picsum.photos/seed/${project.imageSeed || project.title}/1200/800`} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:scale-110 transition-transform"
           >
             Source Code <Github className="w-4 h-4" />
           </a>
        </div>
      </div>
      <div>
        <div className="flex gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-500 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-4xl font-bold tracking-tight mb-6">{project.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          {project.description}
        </p>
        <ul className="space-y-4 mb-10">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-800 font-medium">
              <ChevronRight className="w-4 h-4 text-brand mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-brand hover:gap-4 transition-all"
        >
          View Source Code <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact submit failed:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Send failed.');
    }

    setTimeout(() => {
      setStatus('idle');
      setErrorMessage(null);
    }, 5000);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-indigo-50/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Full Name</label>
          <input 
            required
            type="text"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Email Address</label>
          <input 
            required
            type="email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Message</label>
          <textarea 
            required
            rows={4}
            value={formData.message}
            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all resize-none"
            placeholder="How can I help you?"
          />
        </div>
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand transition-all flex items-center justify-center gap-2 disabled:bg-gray-200 shadow-lg shadow-black/5"
        >
          {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Message'}
        </button>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-medium rounded-2xl text-center"
          >
            Thank you! I'll get back to you as soon as possible.
          </motion.div>
        )}
        {status === 'error' && errorMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-2xl text-center"
          >
            {errorMessage}
          </motion.div>
        )}
      </form>
    </div>
  );
}

function ChatBot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: `Hi! I'm ${bioData.name}'s AI assistant. I've been trained on her resume and projects. Ask me anything!` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Prepare context for Groq
      const systemMessage = `
        You are an AI assistant for ${bioData.name}'s professional portfolio.
        The user's data:
        - Name: ${bioData.name}
        - Title: ${bioData.title}
        - Summary: ${bioData.summary}
        - Skills: ${bioData.skills.join(', ')}
        - Projects: ${JSON.stringify(bioData.projects)}
        - Experience: ${JSON.stringify(bioData.experience)}

        Answer questions politely and professionally. If someone asks for contact info, provide ${bioData.contact.email}.
        Be concise and helpful. Don't mention you are an AI model unless asked.
      `;

      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemMessage,
          },
          {
            role: "user",
            content: userMsg,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      });

      const aiResponse = response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "There was an error communicating with the AI. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-lg h-[600px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Chat Header */}
        <div className="px-8 py-6 bg-black text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold tracking-tight">Portfolio Assistant</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Powered by Groq</div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-6 py-4 rounded-[1.5rem] text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-black text-white rounded-tr-none' 
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="px-6 py-4 rounded-[1.5rem] bg-gray-100 text-gray-400 rounded-tl-none">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my experience..."
              className="w-full px-6 py-4 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black pr-14"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center disabled:bg-gray-300 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
