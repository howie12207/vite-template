// 123456 => 123,456
export const toThousand = value => {
    if (!value) return 0;
    return String(value).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

// Time Format
// 2022-02-02
export const today = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
    const dd = now.getDate() >= 10 ? now.getDate() : `0${now.getDate()}`;
    return `${yyyy}-${mm}-${dd}`;
};

// 02/02
export const yesterday = () => {
    const now = new Date();
    const lastDay = new Date(now.setDate(now.getDate() - 1));
    const mmLast =
        lastDay.getMonth() + 1 >= 10 ? lastDay.getMonth() + 1 : `0${lastDay.getMonth() + 1}`;
    const ddLast = lastDay.getDate() >= 10 ? lastDay.getDate() : `0${lastDay.getDate()}`;
    return `${mmLast}/${ddLast}`;
};
