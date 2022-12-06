const moduleName = 'ireport';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
    folders: `${urlBase}/folders`,
    orderPosition: `${urlBase}/folders/order-position`,
    reports: `${urlBase}/reports`,
    reportTypes: `${urlBase}/report-types`,
    entities: `${urlBase}/reports/entities`
}
