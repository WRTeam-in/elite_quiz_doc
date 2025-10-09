import React, { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@n8n/chat/style.css';
// import './custom-chat-styles.css';

export default function ChatWidget() {
  const { siteConfig: { customFields } } = useDocusaurusContext();

  useEffect(() => {
    // Initialize n8n chat widget
    createChat({
      webhookUrl: customFields.n8nChatWebhookUrl,
      webhookConfig: {
        method: 'POST',
        headers: {},
      },
      mode: 'window',
      loadPreviousSession: true,
      showWelcomeScreen: false,
      initialMessages: [
        'Hi there! 👋',
        'Welcome to Elite Quiz Documentation. How can I help you today?',
      ],
      i18n: {
        en: {
          title: 'Elite Quiz Support 💬',
          subtitle: 'Ask me anything about Elite Quiz setup and features',
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question...',
        },
      },
      enableStreaming: false,
    });
  }, []);

  return null;
}
