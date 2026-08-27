import MainCard from "@/components/cards/MainCard";

export default function DashboardPage() {
  const cards = [
    {
      name: "Transactions",
      children: <div>Transaction content</div>,
      url: "/transactions",
    },
    {
      name: "Invest",
      children: <div>Invest content</div>,
      url: "/invest",
    },
    {
      name: "Lending&Borrowing",
      children: <div>Lending&Borrowing content</div>,
      url: "/lending&borowing",
    },
    {
      name: "Remainders",
      children: <div>Remainders content</div>,
      url: "/remainders",
    },
    {
      name: "Recurring Payments",
      children: <div>Recurring Payments content</div>,
      url: "/recurring",
    },
    {
      name: "Extra",
      children: <div>Extra content</div>,
      url: "/extra",
    },
  ];

  return (
    <div className="grid grid-cols-2 py-12 pr-4 w-full gap-2">
      {cards.map((card, index) => (
        <MainCard name={card.name} url={card.url} index={index}>
          {card.children}
        </MainCard>
      ))}
    </div>
  );
}
