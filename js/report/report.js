fetch("http://127.0.0.1:5000/report/")
  .then((response) => response.json())
  .then((report_data) => {
    if (!report_data.error) {
      let row = createReportTemplate(report_data);
      let table = $("#report tbody");
      table.append(row);
    }
  });

function createReportTemplate(report) {
  let template = $("#report-template")[0].innerHTML;
  return Mustache.render(template, report);
}