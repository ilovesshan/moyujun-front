interface IServiceConfig {
  devProxyBaseUrl: string,
  devBaseUrl: string,
  devTimeout: number,

  prodProxyBaseUrl: string,
  prodBaseUrl: string,
  prodTimeout: number,
}

const ServiceConfig: IServiceConfig = {
  devProxyBaseUrl: "/api/wjhs",
  devBaseUrl: "http://localhost:9001",
  devTimeout: 5000,

  prodProxyBaseUrl: "/api/wjhs",
  prodBaseUrl: "https://ilovesshan/wjhs",
  prodTimeout: 5000,
}

export default ServiceConfig;