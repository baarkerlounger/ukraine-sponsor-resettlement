(function() {

console.log('WE HAVE BEEN CALLED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

  var selfAssesmentContinueButton = document.getElementById('selfAssessmentContinueButton');
    if(selfAssesmentContinueButton) {
        selfAssesmentContinueButton.addEventListener('click', function() {
            var elements = document.getElementsByName('assessment-buttons');
            var selectedOption;
        
            for (var i=0, len=elements.length; i<len; ++i) {
                if (elements[i].checked){
                    selectedOption = elements[i].dataset.next;
                    break;
                }
            }
            if(selectedOption) {
                window.location.href = selectedOption;
            }
          })
    }

} )()
