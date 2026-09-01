export default function Preloader() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          border: '4px solid #ddd',
          borderTopColor: '#0066cc',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
