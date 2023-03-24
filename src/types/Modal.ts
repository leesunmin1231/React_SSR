export type buttonType = { name: string; handler: () => void };

export default interface modalType {
  display: boolean;
  message: string;
  buttons: buttonType[];
}
