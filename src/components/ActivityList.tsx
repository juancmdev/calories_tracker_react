import { type Activity } from "../types";

type ActivityListProps = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>
    </>
  );
}
