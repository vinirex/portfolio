export const blogPosts = [
  {
    slug: "mastering-react-server-components",
    title: "Mastering React Server Components",
    excerpt: "Learn how to leverage React Server Components to build faster and more SEO-friendly web applications in Next.js 15.",
    date: "July 15, 2026",
    readingTime: "5 min read",
    tags: ["React", "Next.js", "Performance"],
    content: `
# Mastering React Server Components

React Server Components (RSC) represent a fundamental shift in how we build React applications. By rendering components on the server, we can send less JavaScript to the client and improve load times.

## Why RSCs?

1. **Zero Bundle Size Impact**: Server components don't add to the JavaScript bundle size.
2. **Direct Backend Access**: You can securely query databases or internal APIs directly from your component.

### Example

\`\`\`tsx
import db from '@/lib/db';

export default async function ProductList() {
  const products = await db.query('SELECT * FROM products');
  
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

Embrace Server Components to unlock the full potential of Next.js!
    `
  },
  {
    slug: "building-scalable-apis-fastapi",
    title: "Building Scalable APIs with FastAPI",
    excerpt: "A deep dive into why FastAPI is becoming the go-to framework for modern Python backend development.",
    date: "June 28, 2026",
    readingTime: "7 min read",
    tags: ["Python", "Backend", "FastAPI"],
    content: `
# Building Scalable APIs with FastAPI

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

## Key Features

- **Fast**: Very high performance, on par with NodeJS and Go.
- **Fast to code**: Increase the speed to develop features by about 200% to 300%.
- **Intuitive**: Great editor support. Completion everywhere.

If you haven't tried FastAPI yet, you are missing out on one of the best Python developer experiences available today.
    `
  }
];
