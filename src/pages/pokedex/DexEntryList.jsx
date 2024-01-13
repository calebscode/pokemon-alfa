import DexEntry from "./DexEntry";

export default function DexEntryList({ entries }) {
  return (
    <div className="item-list">
      {entries.map((entry) => (
          <DexEntry key={entry.name} entry={entry} />
        ))}
    </div>
  )
}