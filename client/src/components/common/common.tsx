import { LogRegLink, LogRegP } from './common-style';

type LogRegMessageProps = {
  question: string;
  offer: string;
  to: string;
}
export const LogRegMessage = ({offer, question, to}: LogRegMessageProps) => (
  <LogRegP>
    {question}
    <LogRegLink to={to}> {offer}</LogRegLink>
  </LogRegP>
);
