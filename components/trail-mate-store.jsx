import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import trails from "../hikeData.json";

const TrailMateContext = createContext(null);
const STORAGE_KEY = "trailmate.preferences.v1";

export function TrailMateProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [savedIds, setSavedIds] = useState([]);
  const [units, setUnits] = useState("imperial");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  useEffect(() => { AsyncStorage.getItem(STORAGE_KEY).then((value) => { if (!value) return; const stored = JSON.parse(value); setSavedIds(Array.isArray(stored.savedIds) ? stored.savedIds : []); setUnits(stored.units === "metric" ? "metric" : "imperial"); setNotificationsEnabled(stored.notificationsEnabled !== false); }).catch(() => {}).finally(() => setReady(true)); }, []);
  useEffect(() => { if (ready) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ savedIds, units, notificationsEnabled })).catch(() => {}); }, [ready, savedIds, units, notificationsEnabled]);
  const value = useMemo(() => ({ trails, ready, savedIds, units, notificationsEnabled, toggleSaved: (id) => setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]), setUnits, setNotificationsEnabled }), [notificationsEnabled, ready, savedIds, units]);
  return <TrailMateContext.Provider value={value}>{children}</TrailMateContext.Provider>;
}
export function useTrailMate() { const value = useContext(TrailMateContext); if (!value) throw new Error("useTrailMate must be used inside TrailMateProvider"); return value; }
