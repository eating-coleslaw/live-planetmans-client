import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import planetsideWorlds from "../services/planetsideWorlds";

async function getTopPlayers(worldId) {
  // const response = await fetch(`https://localhost:5001/activity/worlds/${worldId}/players`, {
  const response = await fetch(
    `https://localhost:49189/activity/worlds/${worldId}/players`,
    {
      method: "GET",
    }
  );

  const responseJson = await response.json();

  //   console.log(responseJson);

  return responseJson.players;
}

export default function TopPlayers({ worldId }) {
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      const players = await getTopPlayers(worldId);

      //   console.log(players);

      const playerItems = players.map((player) => {
        const outfitAlias = !!player.outfitAlias
          ? `[${player.outfitAlias}]`
          : "";

        return (
          <tr key={player.name} className="">
            <td>{outfitAlias}</td>
            <td>{player.name}</td>
            <td>{player.kills}</td>
            <td>{player.deaths}</td>
            <td>{player.suicides}</td>
            <td>{player.teamkills}</td>
            <td>{player.headshots}</td>
          </tr>
        );
      });

      if (mounted) {
        setPlayersList(playerItems);
      }
    }

    fetchData();

    return () => (mounted = false);
  }, [worldId]);

  if (playersList.length === 0) {
    return (
      <div className="">
        <p>There are no players to display.</p>
      </div>
    );
  }

  return (
    <Table hover size="sm" responsive="md">
      <thead>
        <tr>
          <th></th>
          <th>Player</th>
          <th>Kills</th>
          <th>Deaths</th>
          <th>Suicides</th>
          <th>Teamkills</th>
          <th>Headshots</th>
        </tr>
      </thead>
      <tbody>{playersList}</tbody>
    </Table>
  );
}
