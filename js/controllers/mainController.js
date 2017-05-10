// MAIN CONTROLLER
function mainController($scope) {
    $scope.rows = []
    $scope.m_fonction = function () {
        $scope.$watch('form.$valid', function (valid) {



                $scope.rows.push({
                    Nom: $scope.Nom,
                    Email: $scope.Email,
                    Prenom: $scope.Prenom,

                });
                // console.log("avant",$scope.rows)
                // $scope.rows = $scope.rows.filter((v, i, a) => a.indexOf(v) === i)
                // console.log("apres",$scope.rows)



            }

        );


        // console.log($scope.rows.Email)

    }


}

 