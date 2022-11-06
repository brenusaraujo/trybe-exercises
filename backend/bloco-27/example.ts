class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string;
  connectedTo: string | undefined;
  constructor(b: string, s: number, r: number, c: string) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  public turnOn = () => {
    console.log(this.brand);
    console.log(this.size);
    console.log(this.resolution);
    console.log(this.connections);
  };
}

const newTv = new Tv("lg", 100, 49, "hdmi");

newTv.turnOn();
