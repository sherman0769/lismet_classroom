export default function Schedule() {
  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">實體課程時間表</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">時間</th>
                <th className="py-2 px-4 border">週一</th>
                <th className="py-2 px-4 border">週三</th>
                <th className="py-2 px-4 border">週五</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">09:00-12:00</td>
                <td className="py-2 px-4 border">AI基礎概念</td>
                <td className="py-2 px-4 border">ChatGPT應用</td>
                <td className="py-2 px-4 border">Stable Diffusion實作</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">14:00-17:00</td>
                <td className="py-2 px-4 border">Prompt工程入門</td>
                <td className="py-2 px-4 border">AI影像生成</td>
                <td className="py-2 px-4 border">AI專案實作</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
} 