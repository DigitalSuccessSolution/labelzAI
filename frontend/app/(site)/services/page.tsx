export default function ServicesPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="max-w-2xl bg-white border border-off-white-dark shadow-xl rounded-2xl p-8 md:p-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-teal bg-accent-teal/10 rounded-full mb-4">
          Our Offerings
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy mb-6 tracking-tight">
          Services
        </h1>
        <p className="text-base md:text-lg text-navy-gray leading-relaxed mb-8">
          LabelzAI offers intelligence-driven recruitment solutions, including Executive Search, Permanent Staffing, Contract Staffing, and Recruitment Process Outsourcing (RPO).
        </p>
        <div className="w-16 h-1 bg-accent-gold mx-auto rounded-full" />
      </div>
    </div>
  );
}
