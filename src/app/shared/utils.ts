export class Utils {
  public current = new Date().getFullYear() + 543;
  private past = this.current - 6;
  private future = this.current + 8;

  public listYear = [];
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
  public convertCompanyTextToCompanyArray(companyText: string): any {
    let arraySplitFirst = companyText.split(',(');
    let listCompany = []

    arraySplitFirst.forEach(item => {
      let replaceValue = item.replace(')', '');
      let arraySplitTwo = replaceValue.split(',')
      const data = {
        companyCodeFrom: arraySplitTwo[0] ? arraySplitTwo[0] : '',
        companyCodeTo: arraySplitTwo[1] ? arraySplitTwo[1] : ''
      }
      listCompany.push(data)
    })
    return listCompany;
  }
  public convertCompanyArrayToCompanyText(companyArray: any): any {
    let companyText = ''
    companyArray.forEach(item => {
      let textString = ''
      if (item.companyCodeFrom && item.companyCodeTo) {
        textString += '(' + item.companyCodeFrom + ',' + item.companyCodeTo + ')'
      } else {
        if (item.companyCodeFrom) {
          textString += item.companyCodeFrom
        }
        if (item.companyCodeTo) {
          textString += ',' + item.companyCodeTo
        }
      }
      companyText += textString + ','
    })
    if (companyText.endsWith(',')) {
      companyText = companyText.substring(0, companyText.length - 1)
    }
    return companyText
  }

}