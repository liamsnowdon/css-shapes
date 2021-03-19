class Shape {
  constructor(
    public name: string,
    public html: string,
    public css: string,
    public scss: string,
    public scssMixinUsesMultiplier: boolean = false,
    public group?: string
  ) {}

  getRelatedShapes(shapes: Shape[]): Shape[] {
    if (!this.group) return [];

    return shapes.filter((shape) => {
      return (
        shape.group && shape.group === this.group && shape.name !== this.name
      );
    });
  }
}

export default Shape;
