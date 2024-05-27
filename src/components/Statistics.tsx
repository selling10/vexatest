export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "130mkr",
      description: "Under förvaltning",
    },
    {
      quantity: "5 år",
      description: "Erfarenhet",
    },
    {
      quantity: "20+",
      description: "Fastigheter i portföljen",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">{quantity}</h2>
            <p className="text-xl" style={{ color: "#454545" }}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
