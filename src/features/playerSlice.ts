import { createSlice } from '@reduxjs/toolkit';

interface Player {
  role: string;
  location: string;
}

interface PlayerState {
  numPlayers: number;
  players: Player[];
}

const initialState: PlayerState = {
  numPlayers: 0,
  players: [],
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
});

export default playerSlice.reducer;
