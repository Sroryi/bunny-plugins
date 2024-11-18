import testcmd from "./cmd";
import { registerCommand } from "@vendetta/commands";
import Settings from "./Settings";

let testcmd;

export default {
  onLoad: () => {
    const categories = ["device", "hardware", "software", "discord", "react"]; // TODO: move this into storage or somewhere more global
    let options = [
      {
        name: "ephemeral",
        displayName: "ephemeral",
        description: "Keep sysinfo ephemeral (default: true)",
        displayDescription: "Keep sysinfo ephemeral (default: true)",

        type: 5,
        required: false,
      },
      ...categories.map((cat) => {
        return {
          name: cat,
          displayName: cat,

          description: `Display the ${cat} section. Set default in settings.`,
          displayDescription: `Display the ${cat} section. Set default in settings.`,

          type: 5,
          required: false,
        };
      }),
    ];
    syscmd = registerCommand({
      name: "command test lol",
      displayName: "hi woe",

      description: "command test yes",
      displayDescription: "description is cool",

      options,
      execute: sysinfo,
      applicationId: -1,
      inputType: 1,
      type: 1,
    });
  },
  onUnload: () => {
    syscmd();
  },
  settings: Settings,
};
