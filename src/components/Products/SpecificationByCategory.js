export const mobileSpecification = (product) => {
  return (
    <tbody>
      <tr className="row">
        <td className="col-3">Processor</td>
        <td className="col-9">{product.processor}</td>
      </tr>
      <tr className="row">
        <td className="col-3">RAM</td>
        <td className="col-9">{product.ram}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Internal Storage</td>
        <td className="col-9">{product.memory}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Camera</td>
        <td className="col-9">{product.camera}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Screen Resolution</td>
        <td className="col-9">{product.screen}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Battery Capacity</td>
        <td className="col-9">{product.battery}</td>
      </tr>
    </tbody>
  );
};

export const laptopSpecification = (product) => {
  return (
    <tbody>
      <tr className="row">
        <td className="col-3">Processor</td>
        <td className="col-9">{product.processor}</td>
      </tr>
      <tr className="row">
        <td className="col-3">RAM</td>
        <td className="col-9">{product.ram}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Storage Capacity</td>
        <td className="col-9">{product.memory}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Screen Resolution</td>
        <td className="col-9">{product.screen}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Weight</td>
        <td className="col-9">{product.weight}</td>
      </tr>
    </tbody>
  );
};

export const watchSpecification = (product) => {
  return (
    <tbody>
      <tr className="row">
        <td className="col-3">Available Sensors</td>
        <td className="col-9">{product.sensor}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Screen Resolution</td>
        <td className="col-9">{product.screen}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Battery Capacity</td>
        <td className="col-9">{product.battery}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Water Resistance Depth</td>
        <td className="col-9">{product.water_depth}</td>
      </tr>
    </tbody>
  );
};

export const tvSpecification = (product) => {
  return (
    <tbody>
      <tr className="row">
        <td className="col-3">Display</td>
        <td className="col-9">{product.screen}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Screen Resolution</td>
        <td className="col-9">{product.screen_resolution}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Connectivity</td>
        <td className="col-9">{product.connectivity}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Speaker</td>
        <td className="col-9">{product.speaker}</td>
      </tr>
    </tbody>
  );
};

export const headphoneSpecification = (product) => {
  return (
    <tbody>
      <tr className="row">
        <td className="col-3">Wireless</td>
        <td className="col-9">{product.wireless}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Microphone</td>
        <td className="col-9">{product.microphone}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Connector Type</td>
        <td className="col-9">{product.connector}</td>
      </tr>
      <tr className="row">
        <td className="col-3">Cord Length</td>
        <td className="col-9">{product.cord_length}</td>
      </tr>
    </tbody>
  );
};
