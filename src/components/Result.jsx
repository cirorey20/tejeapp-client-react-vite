// Result.jsx
export default function Result({ reply }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Respuesta de la IA</h2>
          <div className="border-t pt-4">
            <pre className="whitespace-pre-wrap text-lg text-gray-800">
              {reply}
            </pre>
          </div>
        </div>
      </div>
    );
  }
  