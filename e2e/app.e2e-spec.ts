import { EmployeePage } from './app.po';

describe('employee App', () => {
  let page: EmployeePage;

  beforeEach(() => {
    page = new EmployeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
