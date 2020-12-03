export class Query {
  public queryString: string;

  constructor(model?: any) {
    if (model && model.queryString) {
        this.queryString = model.queryString;
    }
  }

  public static queryParams(model: Query): string {
    return `${(model.queryString ? ('?' + model.queryString) : '')}` +
        ``.trim();
  }
}
