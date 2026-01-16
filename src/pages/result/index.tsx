import { useLanguage, useQuiz } from "@/hooks";
import { ScentsType } from "@/types";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Custom colors for chart
const COLORS = ['#000000', '#D4AF37', '#333333', '#B8860B', '#666666'];

export default function ResultPage() {
  const { t } = useLanguage();
  const { result, handleRestart } = useQuiz();

  if (!result) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500">No result available</p>
      </div>
    );
  }

  const data = result.components.map(c => ({
    name: `No.${c.number} ${c.name}`,
    value: c.percentage,
    type: c.type
  }));

  return (
    <div className="w-full px-4 py-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gold-700 uppercase tracking-widest text-xs font-bold mb-2">{t.result.eyebrow}</p>
          <h1 className="text-3xl font-serif text-black mb-4">{result.blendName}</h1>
          <p
            className="text-base text-gray-600 italic max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: `"${result.description}"` }}
          />
        </div>

        {/* Chart Section */}
        <div className="mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ backgroundColor: '#fff', borderColor: '#F9F1D8', fontSize: '14px' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Components List */}
        <div className="mb-8">
          <h3 className="text-xl font-serif text-black border-b border-gold-300 pb-2 mb-4">{t.result.formulaTitle}</h3>
          <ul className="space-y-4">
            {result.components.map((comp, idx) => (
              <li key={idx} className="flex flex-col border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-start gap-2">
                    <span className="font-serif text-gold-500 text-base font-bold">{t.result.componentNumber} {comp.number}</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-base text-black leading-tight">{comp.name}</span>
                      {comp.similarTo && (
                        <span className="text-xs text-gold-700 font-serif italic">{t.result.reminiscentOf} {comp.similarTo}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-gold-700 font-bold font-mono text-base">{comp.percentage}%</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${comp.type === ScentsType.PERFUME ? 'bg-gray-100 text-black' : 'bg-gold-100 text-gold-800'}`}>
                    {comp.type}
                  </span>
                  <span className="text-xs text-gray-400 font-mono tracking-wide">{comp.code}</span>
                </div>
                <p className="text-sm text-gray-600 italic pl-3 border-l-2 border-gold-100 leading-relaxed">"{comp.reason}"</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Reasoning Section */}
        <div className="bg-black text-white p-6 rounded-lg shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-gold-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-serif text-gold-300 mb-3">{t.result.reasoningTitle}</h3>
            <p
              className="text-base leading-loose font-light text-gray-100"
              dangerouslySetInnerHTML={{ __html: result.reasoning }}
            />
          </div>
        </div>

        {/* Restart Button */}
        <div className="text-center">
          <button
            onClick={handleRestart}
            className="bg-transparent border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold"
          >
            {t.result.restartButton}
          </button>
        </div>
      </div>
    </div>
  );
}
