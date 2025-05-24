export default function ContainerBlogs({ children }) {
  return (
    <div className="max-h-80 overflow-y-auto px-1 py-2">
      {children}
    </div>
  );
} 