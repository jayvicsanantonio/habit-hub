import { useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HabitDialog from "@/components/common/HabitDialog";
import HabitDialogHeader from "@/components/common/HabitDialogHeader";
import HabitForm from "@/components/common/HabitForm";
import HabitStats from "@/components/common/HabitStats";
import { ThemeContext } from "@/context/ThemeContext";
import { Habit } from "@/types/habit";

export default function EditHabitDialog({
  habit,
  setHabit,
  showEditHabitDialog,
  toggleShowEditHabitDialog,
}: {
  habit: Habit | null;
  setHabit: (habit: Habit) => void;
  showEditHabitDialog: boolean;
  toggleShowEditHabitDialog: () => void;
}) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <HabitDialog
      isOpen={showEditHabitDialog}
      toggleIsOpen={toggleShowEditHabitDialog}
    >
      <HabitDialogHeader isEditMode={true} habit={habit} />
      <Tabs defaultValue="edit" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger
            value="edit"
            className={`text-sm ${
              isDarkMode
                ? "data-[state=active]:bg-purple-700 data-[state=active]:text-white"
                : "data-[state=active]:bg-purple-200"
            }`}
          >
            Edit
          </TabsTrigger>
          <TabsTrigger
            value="stats"
            className={`text-sm ${
              isDarkMode
                ? "data-[state=active]:bg-purple-700 data-[state=active]:text-white"
                : "data-[state=active]:bg-purple-200"
            }`}
          >
            Stats
          </TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="h-[600px] sm:h-[496px]">
          <HabitForm
            habit={habit}
            setHabit={setHabit}
            toggleShowHabitDialog={toggleShowEditHabitDialog}
          />
        </TabsContent>
        <TabsContent value="stats" className="h-[496px]">
          <HabitStats habit={habit} />
        </TabsContent>
      </Tabs>
    </HabitDialog>
  );
}
