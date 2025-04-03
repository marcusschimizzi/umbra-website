import { useTheme } from '../../context/ThemeContext';

export default function CodePreview() {
  const { currentTheme } = useTheme();
  
  return (
    <div 
      className="rounded-lg p-4 font-mono text-sm shadow-lg"
      style={{ backgroundColor: currentTheme.colors.secondary }}
    >
      <div className="flex mb-2 items-center space-x-1">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
      </div>
      <pre style={{ color: currentTheme.colors.text }}>
        <span style={{ color: currentTheme.colors.syntax[0] }}>function</span>{' '}
        <span style={{ color: currentTheme.colors.syntax[1] }}>calculateTotal</span>(
        <span style={{ color: currentTheme.colors.syntax[2] }}>items</span>: 
        <span style={{ color: currentTheme.colors.syntax[2] }}>Array</span>&lt;
        <span style={{ color: currentTheme.colors.syntax[2] }}>Item</span>&gt;) {'{'}
        {'\n'}
        {'  '}<span style={{ color: currentTheme.colors.syntax[0] }}>const</span> total = items.
        <span style={{ color: currentTheme.colors.syntax[1] }}>reduce</span>((sum, item) {'=>'} {'{'}
        {'\n'}
        {'    '}<span style={{ color: currentTheme.colors.syntax[0] }}>return</span> sum + item.
        <span style={{ color: currentTheme.colors.syntax[4] }}>price</span> * item.
        <span style={{ color: currentTheme.colors.syntax[4] }}>quantity</span>;
        {'\n'}
        {'  '}{'}'},{'  '}<span style={{ color: currentTheme.colors.syntax[4] }}>0</span>);
        {'\n'}
        {'  '}<span style={{ color: currentTheme.colors.syntax[0] }}>return</span> <span style={{ color: currentTheme.colors.syntax[3] }}>`Total: $${'{'}total{'}'}`</span>;
        {'\n'}
        {'}'}
      </pre>
    </div>
  );
}
