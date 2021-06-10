//
//  photoController.swift
//  myage2
//
//  Created by Junior on 30/04/2021.
//

import UIKit
import Photos
import FirebaseAuth
import FirebaseDatabase
import FirebaseStorage


class photoController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate{
    
    //Outlets
    @IBOutlet weak var cameraBtn: UIButton!
    @IBOutlet weak var cameraPreview: UIImageView!
    //
    @IBOutlet weak var photoLibraryBtn: UIButton!
    @IBOutlet weak var photoLibraryPreview: UIImageView!
    
    @IBOutlet weak var playBtn: UIButton!

    @IBOutlet weak var ageBtn: UIButton!
    @IBOutlet weak var ageLabel: UILabel!
    @IBOutlet weak var ageTextField: UITextField!



    var imagePickerController = UIImagePickerController()
    private let storage = Storage.storage().reference()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        imagePickerController.delegate = self
        checkPermissions()
        
        guard let urlString = UserDefaults.standard.value(forKey: "url") as? String,
              let url = URL(string: urlString) else{
            return
        }
        
        let task = URLSession.shared.dataTask(with: url, completionHandler: {data, _,error in
            guard let data = data, error == nil else{
                return
            }
            DispatchQueue.main.async {
                let image = UIImage(data: data)
                self.cameraPreview.image = image
            }
        })
        task.resume()
    }
    
    
    
    @IBAction func playBtn(_ sender: UIButton) {
        
    }
    
    @IBAction func didValidAge(){
        let userAge = self.ageTextField.text!
        print(userAge)
        ageBtn.isHidden = true
        ageLabel.isHidden = true
        ageTextField.isHidden = true
        cameraPreview.isHidden = false
        photoLibraryBtn.isHidden = false
        cameraBtn.isHidden = false
        playBtn.isHidden = false
    }
    
    @IBAction func didTapButtonLib(){
        let picker = UIImagePickerController()
        picker.sourceType = .photoLibrary
        picker.delegate = self
        picker.allowsEditing = true
        present(picker, animated: true)
    }
    
    @IBAction func didTapButtonCam(){
        let picker = UIImagePickerController()
        picker.sourceType = .camera
        picker.delegate = self
        picker.allowsEditing = true
        present(picker, animated: true)
    }
    
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
        
        
        let userAge = self.ageTextField.text!

        let metadata = StorageMetadata()
        metadata.customMetadata = ["photoAge" : userAge]
        
        storage.child("images/file-"+"\(imageId)"+".png").putData(imageData, metadata: metadata, completion:{ _,error in
            guard error == nil else {
                print("Erreur upload")
                return
            }
            
            self.storage.child("images/file-"+"\(imageId)"+".png").downloadURL(completion: { url, error in
                guard let url = url, error == nil else {
                    return
                }
                
                let urlString = url.absoluteString
                
                DispatchQueue.main.async {
                    self.cameraPreview.image = image

                }
                
                
                print("Url de téléchargement:  \(urlString)")
                UserDefaults.standard.set(urlString, forKey: "url")
            })
            
        })
    }
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController){
        picker.dismiss(animated: true, completion: nil)
    }
    
    
    func checkPermissions() {
        if PHPhotoLibrary.authorizationStatus() != PHAuthorizationStatus.authorized {
            PHPhotoLibrary.requestAuthorization({ (status: PHAuthorizationStatus) -> Void in ()
            })
        }
        
        if PHPhotoLibrary.authorizationStatus() == PHAuthorizationStatus.authorized {
        } else {
            PHPhotoLibrary
                .requestAuthorization(requestAuthorizationHandler)
        }
    }
    
    
    func requestAuthorizationHandler(status: PHAuthorizationStatus) {
        if PHPhotoLibrary.authorizationStatus() == PHAuthorizationStatus.authorized {
            print("Accés autorise pour utiliser la bibliotéque")
        } else {
            print("Nous n'avons pas d'accés à vos photos.")
        }
    }
}









