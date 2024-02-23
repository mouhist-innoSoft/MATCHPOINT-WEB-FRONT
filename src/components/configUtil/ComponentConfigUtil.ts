export default class ComponentConfigUtils {
    static setCursorPositionToStart(event: any): void {
      const value = event.target.value?.replace(/[\D]+/g, "");
      if (event.target && value.length == 0) {
        event.target.setSelectionRange(0, 0);
      }
    }
  }