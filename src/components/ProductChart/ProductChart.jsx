import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import Loading from "../../Loading";
import { fetchTopViewedProducts } from "../../redux/products/products.action";

const state = {
  labels: [],
  datasets: [
    {
      label: "Products",
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
    },
  ],
};

function ProductChart({ topViewedProducts, getTopViewedProducts }) {
  const [chartData, setChartData] = useState(state);
  const [showChart, setShowChart] = useState(false);
  const [noOfProduct, setNoOfProduct] = useState(5);

  useEffect(() => {
    getTopViewedProducts();
  }, [getTopViewedProducts]);

  useEffect(() => {
    state.labels = [];
    state.datasets[0].data = [];
    topViewedProducts &&
      topViewedProducts
        .sort((x, y) => y.view_count - x.view_count)
        .forEach((prod) => {
          state.labels.push(prod.name);
          state.datasets[0].data.push(prod.view_count);
          var r = Math.floor(Math.random() * 255);
          var g = Math.floor(Math.random() * 255);
          var b = Math.floor(Math.random() * 255);
          //let rgb = "rgb(" + r + "," + g + "," + b + ")";
          let rgb = `rgb(${r},${g},${b})`;
          let rgba = `rgba(${r},${g},${b},0.7)`;
          state.datasets[0].backgroundColor.push(rgb);
          state.datasets[0].hoverBackgroundColor.push(rgba);
          setChartData(state);
        });
  }, [topViewedProducts]);

  useEffect(() => {
    let products =
      topViewedProducts &&
      topViewedProducts
        .sort((x, y) => y.view_count - x.view_count)
        .slice(0, noOfProduct);
    state.labels = [];
    state.datasets[0].data = [];
    setShowChart(false);
    products &&
      products.forEach((prod) => {
        state.labels.push(prod.name);
        state.datasets[0].data.push(prod.view_count);
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        //let rgb = "rgb(" + r + "," + g + "," + b + ")";
        let rgb = `rgb(${r},${g},${b})`;
        let rgba = `rgba(${r},${g},${b},0.7)`;
        state.datasets[0].backgroundColor.push(rgb);
        state.datasets[0].hoverBackgroundColor.push(rgba);
        setChartData(state);
      });
    setTimeout(() => setShowChart(true), 0);
  }, [noOfProduct, topViewedProducts]);

  useEffect(() => {
    setTimeout(() => setShowChart(true), 1500);
  });

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">
          <label className="mr-4">Choose Number of Products</label>
          <select
            className="form-control"
            style={{ width: "70px", display: "inline-block" }}
            value={noOfProduct}
            onChange={(e) => setNoOfProduct(e.target.value)}>
            {[...Array(9).keys()].map((val) => (
              <option key={val} value={val + 2}>
                {val + 2}
              </option>
            ))}
          </select>
        </div>
        <div className="card-body">
          {showChart ? (
            <Doughnut
              data={chartData}
              width={100}
              height={400}
              redraw
              options={{
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Your Top Viewed Products",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "bottom",
                  labels: {
                    usePointStyle: true,
                  },
                },
              }}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    topViewedProducts: state.products.topViewedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopViewedProducts: () => dispatch(fetchTopViewedProducts),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductChart);
