import { writable } from 'svelte/store';
import type { Pos } from '$lib/types';

const camera = writable<Pos>({ x: 0, y: 0 });

export default camera;
