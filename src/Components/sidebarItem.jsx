
export function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center p-2 mt-2 ml-2 w-53 gap-3 rounded-lg shadow-md bg-indigo-200">
      {icon}
      <span className="text-indigo-600">{text}</span>
    </div>
  );
}