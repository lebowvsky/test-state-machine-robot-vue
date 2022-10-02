import { createMachine, state, transition } from "robot3";

const machine = createMachine({
  idle: state(transition("edit", "edit")),
  edit: state(transition("submit", "loading"), transition("cancel", "idle")),
  loading: state(),
});
