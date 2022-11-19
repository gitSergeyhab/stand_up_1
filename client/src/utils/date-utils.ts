import dayjs from 'dayjs';


export const getFormatDate = (date: string, format: string) => date ? dayjs(date).format(format) : 'no date';
export const getCurrentYear = () => (+(dayjs().format('YYYY')));
