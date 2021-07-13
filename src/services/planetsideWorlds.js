const planetsideWorlds = (() => {
  const worlds = [
    {
      id: 1,
      name: "Connery",
    },
    {
      id: 17,
      name: "Emerald",
    },
    {
      id: 10,
      name: "Miller",
    },
    {
      id: 13,
      name: "Cobalt",
    },
    {
      id: 40,
      name: "SolTech",
    },
    {
      id: 19,
      name: "Jaeger",
    },
  ];

  const getWorldFromId = (worldId) => worlds.find((world) => world.id === worldId);

  return {
    worlds,
    getWorldFromId,
  };
})();

export default planetsideWorlds;
