export class Utils {
    public current = new Date().getFullYear() + 543;
    private past = this.current - 6;
    private future = this.current + 8;

    public listYear=[];
    public fiscYear = 0;

    public CalculateYear() {
        const listYear = [];
        for (let i = this.past; i <= this.future; i++) {
            listYear.push({ id: i, name: i });
        }
        return listYear;
    }
    public CalculateFiscYear(date: Date) {
        const month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month >= 10) {
          return (year = date.getFullYear() + 544); // old code
        } else {
          return year + 543; // old code
        }
      }
      public parseDate(day, month, year) {
        day = +day < 10 ? '0' + day : day;
        month = +month < 10 ? '0' + month : month;
        return year + '-' + month + '-' + day;
      }
      public convertYearToAD(year: string): string {
        if (year) {
          const buddhistYear = Number(year);
          const adYear = buddhistYear - 543;
          return adYear.toString();
        } else {
          return new Date().getFullYear.toString();
        }
      }
}