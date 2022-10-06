<body>

  <div id="klarna-button-container" ></div>
  
<script>
  
  const klarnaButton = judo.getKlarnaButton({
    	backgroundColor: '#ffb3c7',
    	borderRadius: 4,
    	color: '#171717',
    	height: 36,
    	width: 280,
    	label: 'Pay now'
  })
  
  const container = document.getElementById("klarna-button-container")
  container.append(klarnaButton)
      
</script>
</body>
