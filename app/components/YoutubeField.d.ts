/// <reference types="react" />
import TcFieldProps from '@repo/shared-stuff/types/Form/TcFieldProps';
import CardModel from '../models/lang-learn/CardModel';
type YoutubeField = TcFieldProps<CardModel & {
    readonly startDefault: number;
    readonly endDefault: number;
}, true>;
declare const YoutubeField: ({ value, onChange }: YoutubeField) => import("react").JSX.Element;
export default YoutubeField;
//# sourceMappingURL=YoutubeField.d.ts.map