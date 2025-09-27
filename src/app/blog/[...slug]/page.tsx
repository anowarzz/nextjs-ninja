const CatchAllRoute = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  console.log(await params);

  return (
    <div>
      <h3 className="text-3xl"> Welcome to CatchAllRoute component </h3>
    </div>
  );
};

export default CatchAllRoute;
