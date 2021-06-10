
import UIKit
import FirebaseAuth
import FirebaseDatabase
import FirebaseStorage

//Rajout UIImagePickerControllerDelgate,UINavigationControllerDelegate
class HomeController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

    //Outlets
    @IBOutlet weak var nameLabel: UILabel!
    
    //Initialisation de la variable storage
    private let storage = Storage.storage().reference()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let user = Auth.auth().currentUser {
            //nameLabel.text = user.email
            let ref = Database.database(url: "https://swift-fd5df-default-rtdb.europe-west1.firebasedatabase.app").reference()
            let userID = Auth.auth().currentUser?.uid
            
            ref.child("users").child(userID!).observeSingleEvent(of: .value){(DataSnapshot) in
                let value = DataSnapshot.value as? NSDictionary
                
                let username = value?["username"] as? String ?? "no username"
                self.nameLabel.text = username
            }
            
        } else {
            fatalError("❌ Erreur : aucun utilisateur est connecté lors de l'affichage de l'écran de l'accueil")
        }

    }
    @IBAction func didTapButtonLib() {
            let picker = UIImagePickerController()
            picker.sourceType = .photoLibrary
            picker.delegate = self
            picker.allowsEditing = true
            present (picker, animated: true)
    }
    
    /*
    @IBAction func didTapButtonLib(){
            let picker = UIImagePickerController()
            picker.sourceType = .photoLibrary
            picker.delegate = self
            picker.allowsEditing = true
            present (picker, animated: true)
    }
    */
    
    //storage
        func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]){
            picker.dismiss(animated: true, completion: nil)
            guard let image = info[UIImagePickerController.InfoKey.editedImage] as? UIImage else {
                return
            }
            guard let imageData = image.pngData() else{
                return
            }
            
            let baseIntA = Int(arc4random() % 65535)
            let baseIntB = Int(arc4random() % 65535)
            let imageId = String(format: "%06X%06X", baseIntA, baseIntB)
            
            
            storage.child("images/file-"+"\(imageId)"+".png").putData(imageData, metadata: nil, completion:{ _,error in
                guard error == nil else {
                    print("Erreur upload")
                    return
                }
                
                self.storage.child("images/file-"+"\(imageId)"+".png").downloadURL(completion: { url, error in
                    guard let url = url, error == nil else {
                        return
                    }
                    let urlString = url.absoluteString
                    print("Url de téléchargement:  \(urlString)")
                    UserDefaults.standard.set(urlString, forKey: "url")
                })
                
            })
            // Upload de l'image
            // Retrouve l'url
            // Sauvegarde l'url
        }
//cancel
        func imagePickerControllerDidCancel(_ picker: UIImagePickerController){
            picker.dismiss(animated: true, completion: nil)
        }
    }
    

    func logoutBtnPressed(_ sender: UIButton) {
        do {
            try Auth.auth().signOut()
        } catch {
            print("Impossible de déconnecter l'utilisateur")
        }
    }

    /*
     @IBAction func logoutBtnPressed(_ sender: UIButton) {
         do {
             try Auth.auth().signOut()
             dismiss(animated: true, completion:nil)
         } catch {
             print("Impossible de déconnecter l'utilisateur")
         }
     }
     */

