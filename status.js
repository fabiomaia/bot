function changeStatus(client) {
    const statuses = ["Limpando ferramentas", "Apertando parafusos", "Calibrando motores", "Polindo molas"];
    let index = 0;
  
    setInterval(() => {
      const newStatus = statuses[index];
      client.user.setActivity(newStatus);
      console.log(`Status alterado para: ${newStatus}`);
      index = (index + 1) % statuses.length;
    }, 5000); // 5 segundos
  }

  module.exports = {
    changeStatus,
  };