function Exercicio13() {
  const linguagens = ["JavaScript", "Python", "Java", "C#"]

  return (
    <div>
      <p>Primeira linguagem: {linguagens[0]}</p>
      <p>Última linguagem: {linguagens[linguagens.length - 1]}</p>
    </div>
  )
}

export default Exercicio13
