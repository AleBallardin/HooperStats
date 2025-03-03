import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const drawChart = () => {
      if (!window.google || !window.google.visualization) {
        console.error("Google Charts ainda não carregado.");
        return;
      }

      const dataPie = window.google.visualization.arrayToDataTable([
        ["Exercicio", "Reps"],
        ["Arremesso - 2pts", 30],
        ["Bandeja", 40],
        ["Arremesso - 3pts", 20],
        ["Arremesso - PullUp", 20],
      ]);

      const optionsPie = {
        title: "Reps por Exercício",
        is3D: true,
        backgroundColor: "transparent", 
        colors: ["#262626", "#8C8C8C", "#BFBFBF", "#f9f9f9"],
        titleTextStyle: {
          color: "#f9f9f9", 
          fontSize: 18, 
        },
        legend: {
          textStyle: { color: "#f9f9f9" }, 
        },
        pieSliceTextStyle: {
          color: "#000000", 
        },
      };
      

      const chartPie = new window.google.visualization.PieChart(
        document.getElementById("piechart")
      );

      chartPie.draw(dataPie, optionsPie);

      const dataBar = new window.google.visualization.arrayToDataTable([
        ["Treino", "Porcentagem %",  { role: "style" }],
        ["Treino C - 24/07", 58, "#262626"],
        ["Treino A - 28/05", 56.5, "#8C8C8C" ],
        ["Treino C - 30/01", 56.4, "#BFBFBF" ],
        ["Treino B - 18/02", 55,  "#f9f9f9"],
      ])

      const optionsBar = {
        title: "Melhores Treinos (%)",
        backgroundColor: "transparent",
        hAxis: { textStyle: { color: "#f9f9f9" } }, 
        vAxis: { textStyle: { color: "#f9f9f9" } }, 
        titleTextStyle: { color: "#f9f9f9", fontSize: 18 },
        legend: "none",
      };

      const chartBar = new window.google.visualization.BarChart(
        document.getElementById("barchart")
      );
      chartBar.draw(dataBar, optionsBar);
    };

    const loadGoogleCharts = () => {
      window.google.charts.load("current", { packages: ["corechart"] });
      window.google.charts.setOnLoadCallback(drawChart);
    };

    if (!window.google || !window.google.charts) {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = loadGoogleCharts;
      document.body.appendChild(script);
    } else {
      loadGoogleCharts();
    }

    window.addEventListener("resize", drawChart);

    return () => {
      window.removeEventListener("resize", drawChart);
    };

    
  }, []);




  return (
    <div className="user_activity">
      <div id="piechart" style={{ width: "100%", height: "300px", marginLeft: '30px' }}></div>
      <div id="barchart" style={{width: "100%", height: "300px",  marginLeft: '30px'}}></div>
    </div>
  );
}

export default Dashboard;
